interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: dfwefwefwefewfgi",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "En progreso: lslslslsllsllslsl",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Terminadas: ndndndndndndnnddn",
      status: "finished",
      createdAt: Date.now() - 1000000000,
    },
  ],
};
