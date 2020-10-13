import React, { Component } from 'react';

import api from '../../services/api';

import {
  Wrapper, Project, ProjectsContainer,
} from './styles';

export default class Projects extends Component {
  constructor() {
    super();
    this.state = {
      repositories: [],
    };
  }

  componentDidMount() {
    this.loadRepos();
  }

  loadRepos = async () => {
    const response = await api.get('/users/geisweiller/repos');

    this.setState({ repositories: response.data });
  }

  render() {
    const { repositories } = this.state;

    return (

      <Wrapper>
        <ProjectsContainer>
          {repositories.map((repository) => (
            <Project>
              <strong>{repository.name}</strong>
              <p>{repository.description}</p>
              <a href={repository.html_url}>Acesse o repositório</a>
            </Project>
          ))}
        </ProjectsContainer>
      </Wrapper>

    );
  }
}
