import styled from 'styled-components'

export default styled.div`

.team-list {

    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .team {

        display: flex;
        width: 300px;
        min-height: 200px;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
        overflow: hidden;
        flex-direction: column;

        .team-name {

            height: 30px;
            background-color: #40923A;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #F1F1F1;

                .name {
                    padding-left: 30px;
                    flex-grow: 1;
                    text-align: center;
                }

                .delete-holder {
                    width: 30px;
                }

                .dropdown-actions, .dropdown-actions-content {
                    height: 100%;
                    width: 100%;
                    justify-content: center;
                    align-items: center;
                }
        }

        .users {
            
            flex-grow: 1;

            .user {
                margin: 10px;
                height: 40px;
                display: flex;
                align-items: center;
                color: #F1F1F1;
                background-color: #40923A;
                border-radius: 10px;
                padding: 0 10px;
            }
        }

        .team-loading {

            .progress {
                margin-top: -7px;
                margin-bottom: 2px;
            }
        }

        .delete-team-button {
            display: none;
        }

        &:hover {
            
            .delete-team-button {
                display: block;
            }
        }
    }
}

.add-team {
    padding-top: 20px;
    display: flex;
    justify-content: center;
}

`