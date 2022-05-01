import React from 'react';
import styled from 'styled-components';
import { BiShow } from "react-icons/bi";

interface CTextInputProps {
    label?: string;
    placeholder?: string;
    leftIcon?: string;
    rightIcon?: string;
    value?: string;
    onChange?(): void;
    disabled?: true | false; 
    type?: "date" | "datetime-local" | "time" | "week" | "month" | "text" | "email" | "password" | "number" | "search" | "file" | "range"; 
    onFocus?(): void;
    onBlur?(): void;
    isError?: boolean;
    errorMessage?: string;
    [propName: string]: any
};

interface CTextInputState {
    isFocus: true | false;
};

const Wrapper = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
`;

const Label = styled.h5`
    color: #414141;
    margin-bottom: 5px;
`;

const TextInputWrapper = styled.div<CTextInputProps>`
    display: flex;
    align-items: center;
    padding: 5px;
    background-color: ${(props: CTextInputProps) => props.isError ? "#FCCCCC" : "#EFEFEF"};
    width: full;
    border-radius: 3px;
    border: 2px solid ${(props: CTextInputProps) => props.isError
        ?   "#f33838"
        :   props.isFocus 
            ?   "#d6d6d6" 
            :   "#EFEFEF"
    };
    transition: 0.3s;
`;

const LeftIcon = styled.div`
    height: 27px;
    width: 27px;
    background-color: transparent;
    margin-right: 2.5px;  
`;

const RightIcon = styled.div`
    height: 27px;
    width: 27px;
    background-color: transparent;
    margin-left: 2.5px;  
`;

const TextInput = styled.input<CTextInputProps>`
    display: flex;
    flex: 1;
    box-sizing: border-box;
    align-items: center;
    height: 27px;
    font-size: 13px;
    padding: 5px;
    outline: none;
    border: none;
    background-color: transparent;
    color: #414141;

    ${(props: CTextInputProps) => props.type === "number" && function() {
        return `
            /* Chrome, Safari, Edge, Opera */
            ::-webkit-inner-spin-button{
                -webkit-appearance: none; 
                margin: 0}; 
            }
            ::-webkit-outer-spin-button{
                -webkit-appearance: none; 
                margin: 0}; 
            } 
        
            /* Firefox */
            -moz-appearance: textfield;
        `;
    }};
`;

const ErrorMessage = styled.h6`
    color: #f33838;
    margin-top: 5px;
`;

export default class CTextInput extends React.Component <CTextInputProps, CTextInputState> {
    constructor(props: CTextInputProps) {
        super(props);
        this.state = {
            isFocus: false
        };
    };

    render() {
        const {...rest} = this.props;

        return (
            <Wrapper>
                {this.props.label && <Label>{this.props.label}</Label>}
                <TextInputWrapper isFocus={this.state.isFocus} {...rest}>
                    {this.props.leftIcon && <LeftIcon />}
                    <TextInput
                        placeholder={this.props.placeholder || "Type something..."}
                        value={this.props.value}
                        onChange={this.props.onChange}
                        disabled={this.props.disabled}
                        type={this.props.type || "text"}
                        onFocus={() => {
                            this.props.onFocus && this.props.onFocus();
                            this.setState({ isFocus: true });
                        }}
                        onBlur={() => {
                            this.props.onBlur && this.props.onBlur();
                            this.setState({ isFocus: false });
                        }}
                        {...rest}
                    />
                    {!this.props.rightIcon && <BiShow size={18} color="#414141" />}
                </TextInputWrapper>
                {this.props.errorMessage && <ErrorMessage>{this.props.errorMessage}</ErrorMessage>}
            </Wrapper>
        );
    };
};