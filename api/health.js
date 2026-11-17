export function GET() {
  return Response.json({
    status: 'ok',
    teamId: 'team-zero',
    message: 'Backend connected successfully!'
  });
}