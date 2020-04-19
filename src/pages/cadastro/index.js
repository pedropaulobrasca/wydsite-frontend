import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ParticlesBg from "particles-bg";

import api from "../../services/api";

import "./styles.css";

export default function Cadastro() {
  const [login, setlogin] = useState("");
  const [senha, setsenha] = useState("");
  const [senha2, setsenha2] = useState("");
  const [email, setemail] = useState("");
  const [pergunta, setpergunta] = useState("");
  const [resposta, setresposta] = useState("");
  const [contaexist, setcontaexist] = useState(0);

  const history = useHistory();

  const data = {
    login,
    senha,
    email,
    pergunta,
    resposta,
  };

  async function handleCadastro(params) {
    params.preventDefault();

    const dados = await api.get("/");

    dados.data.dados.map((teste) => {
      console.log(teste.login);
      if (login == teste.login) {
        setcontaexist(1);
      }
    });

    if (
      data.email === "" ||
      data.login === "" ||
      data.pergunta === "" ||
      data.resposta === "" ||
      data.senha === "" ||
      senha2 === ""
    ) {
      alert("Um ou mais campo está vazio!");
    } else {
      if (contaexist === 0) {
        if (senha === senha2) {
          try {
            const response = await api.post("/cadastro", data);
            alert(`Cadastro realizado com sucesso!`);
            setlogin("");
            setsenha("");
            setsenha2("");
            setemail("");
            setpergunta("");
            setresposta("");
          } catch (error) {
            error = "Erro no cadastro, tente novamente.";
            alert(error);
          }
        } else {
          alert("Senha não confere!");
        }
      } else {
        alert("Login já cadastrado");
        setlogin("");
      }
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <form onSubmit={handleCadastro}>
          <h1>Cadastro:</h1>
          <small>WYD 7.56</small>
          <input
            placeholder="Usuário:"
            value={login}
            onChange={(params) => setlogin(params.target.value)}
            maxLength={11}
            minLength={5}
          />
          <input
            placeholder="Senha:"
            value={senha}
            onChange={(params) => setsenha(params.target.value)}
            type="password"
            minLength={5}
          />
          <input
            placeholder="Repita a senha:"
            value={senha2}
            onChange={(params) => setsenha2(params.target.value)}
            minLength={5}
            type="password"
          />
          <input
            placeholder="E-mail:"
            value={email}
            onChange={(params) => setemail(params.target.value)}
            type="email"
          />
          <input
            placeholder="Pergunta secreta:"
            value={pergunta}
            onChange={(params) => setpergunta(params.target.value)}
            minLength={5}
            maxLength={254}
          />
          <input
            placeholder="Resposta secreta:"
            value={resposta}
            onChange={(params) => setresposta(params.target.value)}
            minLength={5}
            maxLength={254}
          />
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </section>
      <ParticlesBg color="#ffffff" type="cobweb" bg={true} num={100} />
    </div>
  );
}
