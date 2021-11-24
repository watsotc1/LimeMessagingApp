import chatClient from "./chatClient";

export default async (id, keyPair) => {
  const response = await chatClient.setUser(
    {
      id,
      name: id,
      image: `https://getstream.io/random_png/?id=cool-recipe-9&name=${id}`,
    },
    chatClient.devToken(id)
  );

  if (
    response.me?.publicKeyJwk &&
    response.me.publicKeyJwk !== JSON.stringify(keyPair.publicKeyJwk)
  ) {
    await chatClient.disconnect();
    throw new Error("This User ID already exists!");
  }

  await chatClient.upsertUsers([
    { id, publicKeyJwk: JSON.stringify(keyPair.publicKeyJwk) },
  ]);
};
