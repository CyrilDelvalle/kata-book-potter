import styled from 'styled-components';

const BookItemWrapper = styled.div`

.book-item {
    margin: 2rem 0rem;
    border-radius: 4px;

    &-activate {
        border: solid 2px #6495ED;
    }

    &-desactivate {
        border: solid 2px;
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
        display: flex;
        justify-content: space-between;
        margin-top: 1rem;

        &-add {
            font-size: 18px;
            color: #fff;
            height: 2.5rem;
            width: 4rem;
            border-radius: 4px;
            border: none;
            box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
            background: #6495ED;
            cursor: pointer;
        }
        &-remove {
            &-enabled {
                font-size: 18px;
                color: #fff;
                height: 2.5rem;
                width: 4rem;
                border-radius: 4px;
                border: none;
                box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
                background: #6495ED;
                cursor: pointer;
            }

            &-disabled {
                font-size: 18px;
                color: #fff;
                height: 2.5rem;
                width: 4rem;
                border-radius: 4px;
                border: none;
                box-shadow: 1px 1px 0px 2px rgba (0,0,0,0.3);
                background: #6495ED;
                opacity: .6
            }
        }
    }
`

export default BookItemWrapper;