import dotenv from "dotenv";
dotenv.config();

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Iniciando seed...");

  const animalsData = [
    {
      name: "Simba",
      description: "Leão africano",
      birthDate: new Date("2018-05-14"),
      species: "Leão",
      habitat: "Savana",
      originCountry: "Quênia",
    },
    {
      name: "Nala",
      description: "Leoa da savana",
      birthDate: new Date("2019-07-22"),
      species: "Leão",
      habitat: "Savana",
      originCountry: "África do Sul",
    },
    {
      name: "Rajah",
      description: "Tigre-de-bengala",
      birthDate: new Date("2016-03-02"),
      species: "Tigre",
      habitat: "Floresta",
      originCountry: "Índia",
    },
    {
      name: "Sheru",
      description: "Tigre-siberiano",
      birthDate: new Date("2017-12-11"),
      species: "Tigre",
      habitat: "Taiga",
      originCountry: "Rússia",
    },
    {
      name: "Koko",
      description: "Gorila-das-montanhas",
      birthDate: new Date("2015-01-10"),
      species: "Gorila",
      habitat: "Montanhas",
      originCountry: "Ruanda",
    },
    {
      name: "Luna",
      description: "Onça-pintada da Amazônia",
      birthDate: new Date("2020-02-09"),
      species: "Onça-pintada",
      habitat: "Floresta tropical",
      originCountry: "Brasil",
    },
    {
      name: "Thor",
      description: "Urso-pardo do Alasca",
      birthDate: new Date("2014-11-05"),
      species: "Urso",
      habitat: "Montanhas",
      originCountry: "Estados Unidos",
    },
    {
      name: "Bella",
      description: "Lobo-cinzento europeu",
      birthDate: new Date("2019-04-17"),
      species: "Lobo",
      habitat: "Floresta",
      originCountry: "Alemanha",
    },
    {
      name: "Aria",
      description: "Águia-careca",
      birthDate: new Date("2021-06-13"),
      species: "Águia",
      habitat: "Montanhas",
      originCountry: "Estados Unidos",
    },
    {
      name: "Tico",
      description: "Arara-azul",
      birthDate: new Date("2020-08-07"),
      species: "Arara",
      habitat: "Floresta tropical",
      originCountry: "Brasil",
    },
    {
      name: "Milo",
      description: "Pinguim-imperador",
      birthDate: new Date("2022-01-25"),
      species: "Pinguim",
      habitat: "Polar",
      originCountry: "Antártida",
    },
    {
      name: "Kira",
      description: "Foca-do-ártico",
      birthDate: new Date("2018-10-19"),
      species: "Foca",
      habitat: "Polar",
      originCountry: "Canadá",
    },
    {
      name: "Goku",
      description: "Chimpanzé africano",
      birthDate: new Date("2017-09-14"),
      species: "Chimpanzé",
      habitat: "Floresta",
      originCountry: "Congo",
    },
    {
      name: "Zazu",
      description: "Calau africano",
      birthDate: new Date("2019-05-30"),
      species: "Calau",
      habitat: "Savana",
      originCountry: "Quênia",
    },
    {
      name: "Pingo",
      description: "Canguru-vermelho",
      birthDate: new Date("2016-06-11"),
      species: "Canguru",
      habitat: "Campos abertos",
      originCountry: "Austrália",
    },
    {
      name: "Ollie",
      description: "Orangotango de Bornéu",
      birthDate: new Date("2013-04-03"),
      species: "Orangotango",
      habitat: "Floresta tropical",
      originCountry: "Indonésia",
    },
    {
      name: "Ruby",
      description: "Elefante asiático",
      birthDate: new Date("2010-09-09"),
      species: "Elefante",
      habitat: "Floresta",
      originCountry: "Tailândia",
    },
    {
      name: "Max",
      description: "Rinoceronte branco",
      birthDate: new Date("2012-02-27"),
      species: "Rinoceronte",
      habitat: "Savana",
      originCountry: "África do Sul",
    },
    {
      name: "Fiona",
      description: "Hipopótamo do Nilo",
      birthDate: new Date("2018-12-03"),
      species: "Hipopótamo",
      habitat: "Rio",
      originCountry: "Uganda",
    },
    {
      name: "Neo",
      description: "Lince-euroasiático",
      birthDate: new Date("2020-03-29"),
      species: "Lince",
      habitat: "Floresta",
      originCountry: "Finlândia",
    },
  ];

  const caresData = [
    {
      name: "Alimentação",
      description: "Fornecimento de dieta adequada conforme a espécie.",
      frequency: "Diário",
    },
    {
      name: "Avaliação Veterinária",
      description: "Exame completo de saúde realizado por um veterinário.",
      frequency: "Mensal",
    },
    {
      name: "Vacinação",
      description: "Vacinas aplicadas conforme calendário anual.",
      frequency: "Anual",
    },
    {
      name: "Treinamento",
      description: "Sessões de treinamento comportamental e enriquecimento.",
      frequency: "Semanal",
    },
    {
      name: "Enriquecimento Ambiental",
      description: "Atividades e objetos para reduzir estresse e estimular o animal.",
      frequency: "Diário",
    },
    {
      name: "Limpeza do Habitat",
      description: "Higienização completa e manutenção do recinto.",
      frequency: "Semanal",
    },
    {
      name: "Troca de Água",
      description: "Reposição de água fresca para animais aquáticos ou aves.",
      frequency: "Diário",
    },
    {
      name: "Monitoramento de Temperatura",
      description: "Verificação e ajuste do clima adequado ao habitat.",
      frequency: "Diário",
    },
  ];

  await prisma.animal.createMany({ data: animalsData });
  console.log("Inseridos 20 animais");

  await prisma.care.createMany({ data: caresData });
  console.log("Inseridos 8 tipos de cuidados");

  console.log("Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
