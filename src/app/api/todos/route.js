import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GETリクエスト: データベースからToDoリストを取得する
export async function GET(request) {
  try {
    const todos = await prisma.todo.findMany();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch todos' }), { status: 500 });
  }
}

// POSTリクエスト: データベースに新しいToDoを追加する
export async function POST(request) {
  try {
    const { text } = await request.json();
    const newTodo = await prisma.todo.create({
      data: {
        text,
        completed: false,
      },
    });
    return new Response(JSON.stringify(newTodo), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create todo' }), { status: 500 });
  }
}