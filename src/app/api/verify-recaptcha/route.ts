import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { token } = await request.json();
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: 'POST',
    }
  );
  const verification = await response.json();

  if (verification.success && verification.score > 0.5) {
    return NextResponse.json({ success: true, score: verification.score });
  } else {
    return NextResponse.json({
      success: false,
      score: verification.score,
      error: verification['error-codes'],
    });
  }
}
