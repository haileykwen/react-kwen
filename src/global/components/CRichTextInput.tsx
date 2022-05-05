import React from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface CRichTextInputProps {
    label?: string;
    value?: string;
    onChange?(): any;
    [propName: string]: any;
};

interface CRichTextInputState {};

const Wrapper = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const Label = styled.h5`
    color: #414141;
    margin-bottom: 5px;
`;

export default class CRichTextInput extends React.Component <CRichTextInputProps, CRichTextInputState> {
    render() {
        const {...rest} = this.props;

        const module = {
            toolbar: [
                [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
                [{ size: [] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' },
                { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image', 'video'],
                ['clean']
            ],
            clipboard: {
                // toggle to add extra line breaks when pasting HTML:
                matchVisual: false,
            }
        };

        const format = [
            'header', 'font', 'size',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image', 'video'
        ];

        return (
            <Wrapper>
                {this.props.label && <Label>{this.props.label}</Label>}
                <ReactQuill 
                    modules={module} 
                    formats={format} 
                    value={this.props.value} 
                    onChange={this.props.onChange} 
                    {...rest}
                />
            </Wrapper>
        );
    };
};