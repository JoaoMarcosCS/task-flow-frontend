"use client";

import { SignInForm } from "./components/SignInForm";

const SignIn = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="xl:w-2/5 w-full shadow-lg flex items-center flex-col ">
        <div className="flex justify-start w-full pt-4 ps-4">
          <h1 className="text-yellow-400 font-semibold text-3xl">TaskFlow</h1>
        </div>
        <div className=" mt-10 w-4/5 max-w-72 ">
          <p className="text-3xl font-medium">Bem-vindo de volta!</p>

          <p className="font-medium text-sm text-muted-foreground">
            Faça login para entrar no Task Flow
          </p>

          <SignInForm />
        </div>

        <div className="mt-10 w4/5 max-w-72 ">
          <p className="text-muted-foreground text-sm px-2 text-center">
            Plataforma FullStack desenvolvido por João Marcos |
            <span>
              <a
                className="text-blue-400"
                href="https://linkedin.com/in/joão-marcos-cândido-da-silva-58b29227a"
                target="_blank"
              >
                {" "}
                Linkedin{" "}
              </a>
            </span>
            |
            <span>
              <a
                className="text-blue-400"
                href="https://github.com/JoaoMarcosCS/"
                target="_blank"
              >
                {" "}
                GitHub{" "}
              </a>
            </span>
          </p>
        </div>
      </div>
      <div className="w-3/5 flex-col xl:flex hidden justify-center items-center relative">
        <div className="w-2/3">
          <h1 className="text-3xl font-medium ">
            &ldquo; 📌 Organize, colabore e turbine sua produtividade no
            TaskFlow! ✅ Gerencie tarefas, acompanhe projetos e trabalhe em
            equipe de forma simples e eficiente 🚀 &rdquo;
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
