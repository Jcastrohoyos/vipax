export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  const { name, email, phone, message } = req.body
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Campos obligatorios faltantes' })
  }

  // Aquí se integraría con un servicio de email o CRM.
  console.log('Contact received:', { name, email, phone, message })

  return res.status(200).json({ success: true })
}
