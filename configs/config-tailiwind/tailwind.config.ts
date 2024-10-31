import { Config } from "tailwindcss";

const preset: Omit<Config, "content"> = {
  theme: {
    colors: {
      test: "#20c997",
    },
  },
};

export default preset;
