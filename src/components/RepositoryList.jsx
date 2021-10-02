import React from 'react';

export function RepositoryList() {
  const newTitle = 'unform 2';
  
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <li>
          <strong>{newTitle}</strong>
          <p>Forms in ReactJS</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in ReactJS</p>

          <a href="">
            Acessar repositório
          </a>
        </li>

        <li>
          <strong>unform</strong>
          <p>Forms in ReactJS</p>

          <a href="">
            Acessar repositório
          </a>
        </li>
      </ul>
    </section>
  );
}