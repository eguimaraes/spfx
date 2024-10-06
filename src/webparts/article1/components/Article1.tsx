import * as React from 'react';
import type { IArticle1Props } from './IArticle1Props';


export default class Article1 extends React.Component<IArticle1Props, {}> {
  public render(): React.ReactElement<IArticle1Props> {
    const {
      
      userDisplayName
    } = this.props;

    return (
      <div>
      <h1>Welcome to My First SPFx Web Part!</h1>
      <p>This is a simple SharePoint web part built with SPFx and React. {userDisplayName}</p>
    </div>
    );
  }
}
