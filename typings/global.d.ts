// global type defitions

// component
// namespace Component {}

// page component
// namespace PageComponent {}

// the github issuse servers
namespace IssuseService {
  // get all params
  interface getAllParams {
    state?: string;
  }

  // get all response
  interface getAllResponse {
    number: string;
    title: string;
    author_association: string;
    labels: [
      {
        name: string;
        color: string;
      }
    ];
  }

  // get details params
  interface getDetailsParams {
    number: string;
  }

  // get detail reponse
  interface getDetailsResponse {
    title: string;
    body: string;
    created_at: string;
    updated_at: string;
    url: string;
  }

  // get comments params
  interface getCommentsParams {
    number: string;
  }

  // get comments response
  interface getCommentsResponse {
    user: {
      url: string;
      avatar_url: string;
      login: string;
      created_at: string;
      body: string;
    };
  }
}
