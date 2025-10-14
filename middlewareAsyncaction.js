//Fetches a list of users from an API end point nad stores it in the redux store:

//state:
//Typically for data fetching we go with 3 properties for the state object:
// 1.loading :which indicates whether the data is currently being fetched or not
//   display a loading spinner in your componenet
// 2.data:list of users.
// 3.error:Display error to the user.
// eg:store={
//     loading:true,
//     data:[],
//     error:""
// }


//Actions for fetching:
// Fetch_users_request-fetch list of users
// Fetch_users_success-fetched successfully
// Fetch_users_failure-error fetching the data

//Reducers for fetching:
// case Fetch_users_request
//  loading :true
// case Fetch_users_success
//  loading:false
//  users:data(from API)
// case Fetch_users_failure
//  loading:false
//  error:error(from API)

