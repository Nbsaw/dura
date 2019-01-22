// export interface getAll {
//   params: {
//   };
//   response: {};
// }

// export interface getDetails {
//   params: {
//     number: number,
//   };
// }

// export interface createComment {
//   params: {
//     body: string,
//     access_token: string,
//     issuesId: string,
//   };
// }

// export interface getComments {
//   params: {
//     number: number,
//   };
// }

declare namespace IssuesApiTypes {
  interface getAllParams {
    state?: string,
  }

  interface getAllResponse {
    number:string, 
    title:string,
    author_association: string,
    labels: [
      {
        name: string,
        color: string
      }
    ]
  }
}