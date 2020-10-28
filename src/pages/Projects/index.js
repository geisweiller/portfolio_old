import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import api from '../../services/api';

import {
  Wrapper, Project, ProjectsContainer, StyledSpinner,
} from './styles';

export default function Projects() {
  const active = useSelector((state) => state.darkMode);
  const [loading, setLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await api.get('/users/geisweiller/repos').then((response) => {
        const { data } = response;

        setRepos(data);

        setLoading(false);
      });
    };

    getData();
  }, []);

  return (

    <Wrapper>

      {loading ? (
        <StyledSpinner theme={active} viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"

          />
        </StyledSpinner>
      ) : (
        <ProjectsContainer>
          {repos.map((repo) => (
            <Project key={repo.id}>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Acesse o repositório</a>
            </Project>
          ))}
        </ProjectsContainer>
      )}

    </Wrapper>

  );
}
