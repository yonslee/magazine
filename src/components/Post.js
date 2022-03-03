import { Fragment } from "react";
import { Grid, Image, Text } from "../util";

const Post = (props) => {
    return (
        <Fragment>
            <Grid padding="16px">
                <Grid is_flex>
                    <Image shape="circle" src={props.src} />
                    <Text bold>{props.user_info.user_name}</Text>
                    <Text>{props.insert_dt}</Text>
                </Grid>
                <Grid padding="16px">
                    <Text>{props.contents}</Text>
                </Grid>
                <Grid padding="16px">
                    <Image shape="rectangle" src={props.src} />
                </Grid>
                <Grid padding="16px">
                    <Text bold>{props.comment_cnt}</Text>
                </Grid>
                <div>user profile</div>
                <div>contents</div>
                <div>image</div>
            </Grid>
        </Fragment>
    )
}

Post.defaultProps = {
    user_info : {
        user_name : "수",
        user_profile : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwBpeG%2Fbtruk4F9D2g%2Ff0krfGSjw6QORqQ1jPPv20%2Fimg.jpg"
    },
    image_url : "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwBpeG%2Fbtruk4F9D2g%2Ff0krfGSjw6QORqQ1jPPv20%2Fimg.jpg",
    contents : "괴롭다",
    comment_cnt : 10,
    insert_dt : "2022-02-02"
};

export default Post;