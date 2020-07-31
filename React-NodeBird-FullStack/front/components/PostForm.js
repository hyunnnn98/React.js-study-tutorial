import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
        User: {
            id: 1,
            nickname: '코코하세요',
        },
        content: '첫 번째 게시글',
        img: 'https://web-source-animalcro-project.s3.ap-northeast-2.amazonaws.com/source/loading.png',
    }],
}

const PostForm = () => {
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
            <Input.TextArea maxLength="140" placeholder="어떤 신기한 일이 있었나요?" />
            <div>
                <Input type="file" multiple hidden />
                <Button>이미지 업로드</Button>
                <Button type="primary" stype={{ float: 'right' }} htmlType="submit">짹짹</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return (
                        <div key={i} stype={{ display: 'inline-block' }}>
                            <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    );
};

export default PostForm;