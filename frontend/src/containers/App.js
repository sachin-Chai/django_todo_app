import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import BucketList from "./BucketList";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%",
  },
});
function Todo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Header />
      <Form />
      <TodoList /> */}
      <BucketList />
    </div>
  );
}
export default Todo;
//
//const mapStateToProps = state => {
//  const { selectedSubreddit, postsBySubreddit } = state
//  const {
//    isFetching,
//    lastUpdated,
//    items: posts
//  } = postsBySubreddit[selectedSubreddit] || {
//    isFetching: true,
//    items: []
//  }
//
//  return {
//    selectedSubreddit,
//    posts,
//    isFetching,
//    lastUpdated
//  }
//}
//
//export default connect(mapStateToProps)(App)
