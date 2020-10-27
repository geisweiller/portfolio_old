import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import {
  Wrapper, Project, ProjectsContainer,
} from './styles';

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await api.get('/users/geisweiller/repos').then((response) => {
        const { data } = response;

        setRepos(data);
      });
    };

    getData();
    setLoading(false);
  }, []);

  return (

    <Wrapper loading={loading}>
      {loading ? (
        <FaSpinner color="#000" size={200} />
      ) : (
        <ProjectsContainer>
          {repos.map((repository) => (
            <Project key={repository.id}>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <a href={repository.html_url}>Acesse o repositório</a>
            </Project>
          ))}
        </ProjectsContainer>
      )}

    </Wrapper>

  );
}
