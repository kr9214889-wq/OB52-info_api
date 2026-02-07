export default async function handler(req, res) {
  const { uid } = req.query;

  if (!uid) {
    return res.status(400).json({ error: "UID required" });
  }

  try {
    const response = await fetch(
      `https://ob-52-info-api.vercel.app/player-info?uid=${uid}`,
      {
        headers: {
          "User-Agent": "Mozilla/5.0"
        }
      }
    );

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch player data" });
  }
}

