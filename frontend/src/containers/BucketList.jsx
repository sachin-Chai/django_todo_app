import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";
import { connect } from "react-redux";
import * as actionTypes from "../actions";

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

function BucketList({ bucketList }) {
  const classes = useStyles();
  const [selectedBucket, setSelectedBucket] = useState({});

  const bucketListSample = [
    {
      title: "sample1",
      id: 1,
      todoList: [
        { title: "todo1", completed: true, description: "", id: 1 },
        { title: "todo2", completed: false, description: "", id: 2 },
      ],
    },
    {
      title: "sample2",
      id: 2,
      todoList: [
        { title: "todo3", completed: true, description: "", id: 3 },
        { title: "todo4", completed: true, description: "", id: 4 },
      ],
    },
  ];
  const selectedBucketAction = (item) => {
    setSelectedBucket(item);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <div style={{ display: "flex" }}>
        {!bucketListSample.length ? (
          <Typography variant="h6" color="error">
            No Data to display
          </Typography>
        ) : (
          <List>
            {bucketListSample.map((item) => {
              return (
                <ListItem
                  key={item.id}
                  button
                  onClick={() => selectedBucketAction(item)}
                >
                  <ListItemText primary={item.title} />
                </ListItem>
              );
            })}
          </List>
        )}
        <Container>
          <Header title="todo" />
          <Form />
          <TodoList todoList={selectedBucket.todoList} />
        </Container>
      </div>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    bucketList: state.buckets,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketList);
