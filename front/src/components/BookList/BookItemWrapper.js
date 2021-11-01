import styled from 'styled-components';

const BookItemWrapper = styled.div`

.book-item {
    border: solid 1px;
    margin: 2rem 0rem;
    border-radius: 2px;

    &--name {
    }

    &--description {
        border: solid 1px;
    }

    &--image {
        &-logo {
            width: 14rem;
            height: 19rem;
        }
    }

    &--buttons {
        &-add {
            font-size: 18px;
            color: #fff;
            height: 40px;
            width: 50px;
            border-radius: 4px;
            border: none;
            box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
            background: rgb(141,217,252);
            cursor: pointer;
        }
        &-remove {
            &-enabled {
                font-size: 18px;
                color: #fff;
                height: 40px;
                width: 50px;
                border-radius: 4px;
                border: none;
                box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
                background: rgb(141,217,252);
                cursor: pointer;
            }

            &-disabled {
                font-size: 18px;
                color: #fff;
                height: 40px;
                width: 50px;
                border-radius: 4px;
                border: none;
                box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
                background: rgb(141,217,252);
                cursor: pointer;
                opacity: .6
            }
        }
    }
`

export default BookItemWrapper;