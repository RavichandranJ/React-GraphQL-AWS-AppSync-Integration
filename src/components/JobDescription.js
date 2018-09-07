import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export default class JobDescription extends Component {
  render() {
    return (

      <Query
        query={GET_JOB}
        variables={{ id: this.props.match.params.id }}
      >
        {({ loading, error, data, refetch }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;

          return (

            <section className="g-py-30">
              <div className="container">
                <div className="row">
                  {/* Content */}
                  <div className="col-lg-8 g-mb-30 g-mb-0--lg">
                    <article className="u-shadow-v11 rounded g-pa-30">
                      {/* Content Header */}
                      <div className="row">
                        <div className="col-md-9 g-mb-30 g-mb-0--md">
                          <div className="media">
                            <div className="d-flex align-self-center g-mt-3 g-mr-20">
                              <img className="g-width-40 g-height-40" src="https://s3.amazonaws.com/v2jobs/logo_40x40.png" alt="" />
                            </div>
                            <div className="media-body">
                              <span className="d-block g-mb-3">
                                <a className="u-link-v5 g-font-size-18 g-color-gray-dark-v1 g-color-primary--hover" href>{data.getJob.title2}</a>
                              </span>
                              <span className="g-font-size-13 g-color-gray-dark-v4 g-mr-15">
                                <i className="icon-location-pin g-pos-rel g-top-1 mr-1" /> {data.getJob.city}, {data.getJob.state}, USA
                          </span>
                              <span className="g-font-size-13 g-color-gray-dark-v4 g-mr-15">
                                <i className="icon-directions g-pos-rel g-top-1 mr-1" /> V2Soft Inc.
                          </span>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-3 align-self-center text-md-right">
                          <a className="u-tags-v1 g-font-size-12 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-3 g-px-8" href="#!">Full-Time</a>
                        </div>
                      </div>
                      {/* End Content Header */}
                      <hr className="g-brd-gray-light-v4" />
                      {/* Jobs Description */}
                      <h3 className="h5 g-color-gray-dark-v1 g-mb-10">About V2Soft</h3>
                      <p>V2Soft (www.v2soft.com) is a global company, headquartered out of Bloomfield Hills, Michigan, with locations in Mexico, Italy, India, China and Germany. At V2Soft, our mission is to provide high performance technology solutions to solve real business problems. We become our customer's true partner, enabling both parties to enjoy success. We are committed to promoting diversity in the workplace, and believe it has a positive effect on our company and the customers we serve.
    
</p>
                      {/* End Jobs Description */}
                      <hr className="g-brd-gray-light-v4" />
                      {/* Your Tasks */}
                      <h3 className="h5 g-color-gray-dark-v1 g-mb-10">Job Description</h3>

                      <div className="row">
                        <div className="col-lg">
                          <ul className="list-unstyled g-mb-12 g-mb-0--md">
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have a Bachelor’s degree in Computer Science or related IT discipline</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have at least 5 years of IT development experience.</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have strong, hands-on J2EE development </span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have indepth knowledge of SCALA – Spark programming</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have 3+ years relevant professional experience working with Hadoop (HBase, Hive, MapReduce, Sqoop, Flume) Java, JavaScript, .Net, SQL, PERL, Python or equivalent scripting language</span>
                            </li>

                          </ul>
                        </div>
                        <div className="col-lg">
                          <ul className="list-unstyled mb-0">
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have experience with ETL tools</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must have experience integrating web services</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Knowledge of standard software development methodologies such as Agile and Waterfall</span>
                            </li>
                            <li className="d-flex align-items-center g-mb-12">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Strong communication skills.</span>
                            </li>
                            <li className="d-flex align-items-center">
                              <i className="icon-check d-block g-color-primary g-mr-8" />
                              <span className="d-block">Must be willing to flex work hours accordingly to support application launches and manage production outages if necessary </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* End Your Tasks */}

                      <hr className="g-brd-gray-light-v4" />
                      {/* Offer Details & Skills */}
                      <div className="row">
                        {/* Offer Details */}
                        <div className="col-lg g-mb-30 g-mb-0--lg">
                          <h3 className="h5 g-color-gray-dark-v1 g-mb-10">Offer Details</h3>
                          <ul className="list-unstyled mb-0">
                            <li className="media g-mb-10">
                              <span className="d-block g-color-gray-dark-v5 g-width-110">
                                <i className="icon-wallet g-pos-rel g-top-1 g-mr-5" /> Sallery:
                          </span>
                              <span className="media-body">$4000 - $5000</span>
                            </li>
                            <li className="media g-mb-10">
                              <span className="d-block g-color-gray-dark-v5 g-width-110">
                                <i className="icon-calendar g-pos-rel g-top-1 g-mr-5" /> Date:
                          </span>
                              <span className="media-body">{data.getJob.pubDate}</span>
                            </li>
                            <li className="media">
                              <span className="d-block g-color-gray-dark-v5 g-width-110">
                                <i className="icon-location-pin g-pos-rel g-top-1 g-mr-5" /> Location:
                          </span>
                              <span className="media-body">{data.getJob.city}, {data.getJob.state}, USA</span>
                            </li>
                          </ul>
                        </div>
                        {/* End Offer Details */}
                        {/* Skills */}
                        <div className="col-lg">
                          <h3 className="h5 g-color-gray-dark-v1 g-mb-10">Skills</h3>
                          <ul className="list-inline mb-0">
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">Photoshop</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">Sketch</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">JavaScript</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">Git</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">HTML5</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">Photoshop</a>
                            </li>
                            <li className="list-inline-item g-mb-10">
                              <a className="u-tags-v1 g-font-size-13 g-color-main g-brd-around g-bg-gray-light-v5 g-bg-primary--hover g-color-white--hover rounded g-py-5 g-px-15" href="#!">SASS</a>
                            </li>
                          </ul>
                        </div>
                        {/* End Skills */}
                      </div>
                      {/* End Offer Details & Skills */}
                    </article>
                  </div>
                  {/* End Content */}
                  {/* Sidebar */}
                  <div className="col-lg-4">
                    <aside className="u-shadow-v11 rounded g-pa-30">
                      {/* Content Header */}
                      <div className="media g-mb-20">
                        <div className="d-flex align-self-center g-mt-3 g-mr-15">
                          <img className="g-width-40 g-height-40" src="https://s3.amazonaws.com/v2jobs/logo_40x40.png" alt="" />
                        </div>
                        <div className="media-body">
                          <span className="d-block">
                            <a className="u-link-v5 g-font-size-18 g-color-gray-dark-v1 g-color-primary--hover" href>V2Soft Inc.</a>
                          </span>
                          <span className="js-rating d-inline-block small g-color-primary g-mr-15" data-rating="4.5"><div className="g-rating" style={{ display: 'inline-block', position: 'relative', zIndex: 1, whiteSpace: 'nowrap', marginLeft: '-2px', marginRight: '-2px' }}><div className="g-rating-forward" style={{ position: 'absolute', left: 0, top: 0, height: '100%', overflow: 'hidden', width: '90%' }}><i className="fa fa-star" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star" style={{ marginLeft: 2, marginRight: 2 }} /></div><div className="g-rating-backward" style={{ position: 'relative', zIndex: 1 }}><i className="fa fa-star-o" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star-o" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star-o" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star-o" style={{ marginLeft: 2, marginRight: 2 }} /><i className="fa fa-star-o" style={{ marginLeft: 2, marginRight: 2 }} /></div></div></span>
                          <span className="g-color-gray-dark-v5">78 Reviews</span>
                        </div>
                      </div>
                      {/* End Content Header */}
                      {/* Google Map */}
                      <img alt="" src="https://maps.googleapis.com/maps/api/staticmap?center=V2Soft+Inc,+USA&zoom=9&scale=1&size=256x256&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CV2Soft+Inc,+USA" />

                      {/* End Google Map */}
                      <hr className="g-brd-gray-light-v4" />
                      {/* Contacts */}
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-baseline g-mb-12">
                          <i className="icon-location-pin g-color-gray-dark-v5 g-mr-10" />
                          <span>300 Enterprise Ct, Bloomfield Hills, MI 48302, USA</span>
                        </li>
                        <li className="d-flex align-items-baseline g-mb-10">
                          <i className="icon-phone g-color-gray-dark-v5 g-mr-10" />
                          <span>+1 248-904-1700</span>
                        </li>
                        <li className="d-flex align-items-baseline g-mb-10">
                          <i className="icon-envelope g-color-gray-dark-v5 g-mr-10" />
                          <a className="u-link-v5 g-color-main g-color-primary--hover" href="mailto:jobs@v2soft.com">jobs@v2soft.com</a>
                        </li>
                        <li className="d-flex align-items-baseline g-mb-10">
                          <i className="icon-globe g-color-gray-dark-v5 g-mr-10" />
                          <a className="u-link-v5 g-color-main g-color-primary--hover" href="#!">v2soft.com</a>
                        </li>
                      </ul>
                      {/* End Contacts */}
                      <hr className="g-brd-gray-light-v4" />
                      {/* Social Links */}
                      <ul className="list-inline mb-0">
                        <li className="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title data-original-title="Facebook">
                          <a href="#!">
                            <i className="fa fa-facebook" />
                          </a>
                        </li>
                        <li className="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title data-original-title="Linkedin">
                          <a href="#!">
                            <i className="fa fa-linkedin" />
                          </a>
                        </li>
                        <li className="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title data-original-title="Twitter">
                          <a href="#!">
                            <i className="fa fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item g-mx-10" data-toggle="tooltip" data-placement="top" title data-original-title="Dribbble">
                          <a href="#!">
                            <i className="fa fa-dribbble" />
                          </a>
                        </li>
                      </ul>
                      {/* End Social Links */}
                      <hr className="g-brd-gray-light-v4" />

                      {/* Save or Print  */}
                      <ul className="list-unstyled d-flex justify-content-between">
                        <li>
                          <a className="u-link-v5 g-color-main g-color-primary--hover" href="#!">
                            <i className="fa fa-bookmark-o g-color-gray-dark-v5 g-mr-5" /> Save for later
                      </a>
                        </li>
                        <li>
                          <a className="u-link-v5 g-color-main g-color-primary--hover" href="#!">
                            <i className="icon-printer g-color-gray-dark-v5 g-pos-rel g-top-1 g-mr-5" /> Print Job
                      </a>
                        </li>
                      </ul>
                      {/* End Save or Print  */}
                      <hr className="g-brd-gray-light-v4" />
                      <a className="btn btn-xl btn-block u-btn-primary text-uppercase g-font-weight-600 g-font-size-12" href="#!">Apply Now</a>
                    </aside>
                  </div>
                  {/* Sidebar */}
                </div>
              </div>
            </section>
          )
        }}
      </Query>

    );
  }
}

export const GET_JOB = gql`
query ($id:ID!){
    getJob(id: $id) {
      id
      title
      link
      description
      pubDate
      title2
      city
      state
      jobid   
    }
  }       
`
