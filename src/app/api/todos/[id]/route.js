import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// PATCHリクエスト: 特定のToDoの完了状態をトグルする
export async function PATCH(request, { params }) {
  const { id } = params; // URLパラメータからIDを取得
  const { completed } = await request.json(); // リクエストボディから完了状態を取得

  try {
    const updatedTodo = await prisma.todo.update({
      where: { id: Number(id) }, // IDに基づいてToDoを更新
      data: { completed }, // 完了状態を更新
    });
    return new Response(JSON.stringify(updatedTodo), { status: 200 });
  } catch (error) {
    console.error('Failed to update todo:', error);
    return new Response(JSON.stringify({ error: 'Failed to update todo' }), { status: 500 });
  }
}

// DELETEリクエスト: 特定のToDoを削除する
export async function DELETE(request, { params }) {
  const { id } = params; // URLパラメータからIDを取得

  try {
    await prisma.todo.delete({
      where: { id: Number(id) }, // IDに基づいてToDoを削除
    });
    return new Response(null, { status: 204 }); // 削除成功時は204 No Contentを返す
  } catch (error) {
    console.error('Failed to delete todo:', error);
    return new Response(JSON.stringify({ error: 'Failed to delete todo' }), { status: 500 });
  }
}