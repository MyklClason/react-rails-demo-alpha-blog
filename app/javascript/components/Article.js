import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <a href={this.props.path}>{this.props.title}</a>
        <div class="article-body">
          {this.props.description}
        </div>
      </React.Fragment>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  description: PropTypes.string
};
export default Article
