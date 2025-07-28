import { connect } from '../../dbConfig/dbConfig'
import MineMarker from '../../models/mapModel'
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  await connect();

  const body = await req.json();
  const [lng, lat] = body.pinCoords;

  if (!lng || !lat) {
    return NextResponse.json({ error: 'Coordinates missing' }, { status: 400 });
  }
  
  // Example: Find nearby mines within 10km
  const nearbyMines = await MineMarker.find({
    geometry: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [lng, lat],
        },
        $maxDistance: 10000, // meters
      },
    },
  });
  let score = 0;
  nearbyMines.forEach(() => {
    score += 10; // Example scoring logic
  });
  return NextResponse.json({ nearbyMines, score }, { status: 200 });
}