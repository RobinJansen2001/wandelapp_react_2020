import ReactModalManager, { connect } from '../src/main';

const Button = connect((props) => {
    return (
        <React.Fragment>
            <button
                className="button"
                onClick={() => {
                    props.$modal.present('modal1');
                }}>
                Open modal
            </button>

            <button
                className="button"
                onClick={() => {
                    props.$modal.present('modal2');
                }}>
                Open Modal2
            </button>
        </React.Fragment>
    );
});

export default ReactModalManager;