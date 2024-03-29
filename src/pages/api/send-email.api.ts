import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: FormValues = req.body;
    const { nome, service, telefone, email, mensagem } = data;

    const transporter = nodemailer.createTransport({
      port: 587,
      host: 'smtp.umbler.com',
      auth: {
        user: 'comercial@highlandertech.com.br',
        pass: process.env.UMBLER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: true,
        minVersion: 'TLSv1.2',
      },
    });

    const mailData = {
      to: 'comercial@highlandertech.com.br',
      from: 'comercial@highlandertech.com.br',
      cc: 'giovanifranz151@gmail.com',
      subject: `Nome: ${nome} / Serviço: ${service}`,
      html: `Telefone: ${telefone} <br> E-mail: ${email} <br> Mensagem: ${mensagem}`,
    };

    await new Promise((resolve, reject) => {
      transporter.sendMail(mailData, (err, info) => {
        if (err) {
          console.error(err);
          reject(err);
        } else {
          console.log(info);
          resolve(info);
        }
      });
    });

    res.status(200).end();
  }
};
