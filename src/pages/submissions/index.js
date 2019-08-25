import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/Layout'

const SubmissionsPage = (props) => {
  const beginnerSubmissions = props.data.allBeginnerSubmission.edges;

  return (
      <Layout>
          <section className="section section--gradient">
              <div className="container">
                  <div className="columns">
                      <div className="column is-10 is-offset-1">
                          <div className="section">
                              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                  初心者向け
                              </h2>
                              {beginnerSubmissions.map((submission, i) => {
                                  const submissionData = submission.node;
                                  return (
                                      <h3 className="content">{submissionData.title}</h3>
                                  )
                              })}
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </Layout>
  );
};

export default SubmissionsPage

export const beginnerSubmissionsQuery = graphql`
  query BeginnerSubmissionQuery {
    allBeginnerSubmission {
      edges {
        node {
          title
        }
      }
    }
  }
`;
