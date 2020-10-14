import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import {
  Wrapper, Project, ProjectsContainer,
} from './styles';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
      loading: false,

    };
  }

  componentDidMount() {
    this.loadRepos();
  }

  loadRepos = async () => {
    this.setState({ loading: true });

    const response = await api.get('/users/geisweiller/repos');

    this.setState({ repositories: response.data, loading: false });
  }

  render() {
    const { repositories, loading } = this.state;

    return (

      <Wrapper loading={loading}>
        {loading ? (
          <FaSpinner color="#000" size={200} />
        ) : (
          <ProjectsContainer>
            {repositories.map((repository) => (
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
}
