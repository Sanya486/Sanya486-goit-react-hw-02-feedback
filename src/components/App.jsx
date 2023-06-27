import React, { Component } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Container } from './Container/Container';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  totalFeedbacksCount = () => {
    const feedbackNumbersArray = Object.values(this.state);
    const total = feedbackNumbersArray.reduce((acc, number) => acc + number, 0);
    return total;
  };

  positivePercentageCount = () => {
    const total = this.totalFeedbacksCount();
    if (total) {
      const positivePercentage = (this.state.good / total) * 100;
      return Math.round(positivePercentage);
    }
    return '0';
  };

  onButtonClick = e => {
    const value = e.target.textContent;
    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };

  render() {
    return (
      <>
        <Container>
          <Section title={'Please leave feedback'}>
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.onButtonClick}
            />
          </Section>
          <Section title={'Statistics'}>
            {/* Вирішив трохи відійти від умови. Передав в Statistics  пропом весь state, для того щоб можна було легко додавати нові опції. Додаючи просто нову властивість в state автоматично буде додаватися нова кнопка та новий <p> в Statistics. */}
            {this.totalFeedbacksCount() > 0 ? (
              <Statistics
                options={this.state}
                total={this.totalFeedbacksCount}
                positivePercentage={this.positivePercentageCount}
              />
            ) : (
              <Notification message={'No feedback given'} />
            )}
          </Section>
          
        </Container>
      </>
    );
  }
}
