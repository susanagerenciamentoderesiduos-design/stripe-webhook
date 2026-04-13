export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  const event = req.body;

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    const userId = session.metadata?.user_id;
    const plano = session.metadata?.plano;

    console.log("Pagamento confirmado!");
    console.log("Usuário:", userId);
    console.log("Plano:", plano);
  }

  return res.status(200).send("ok");
} 
