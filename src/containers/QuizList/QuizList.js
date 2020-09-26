import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classes from './QuizList.module.css'

export default class QuizList extends Component {

  renderQuizes = () => {
    return [1, 2, 3].map(quiz => {
      return (
        <li
          key={quiz.id}
        >
          <NavLink
           to={'/quiz/' + quiz}
          >
            Тест {quiz}
          </NavLink>
        </li>
      )
    })
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>Список тестов</h1>
          {
            this.renderQuizes()
          }
        </div>
      </div>
    )
  }
}