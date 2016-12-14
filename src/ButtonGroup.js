import React from 'react';
import {findDOMNode} from 'react-dom';
import classNames from 'classnames';
import ClassNameMixin from './mixins/ClassNameMixin';
import createChainedFunction from './utils/createChainedFunction';

const ButtonGroup = React.createClass({
    mixins: [ClassNameMixin],
    propTypes: {
        type: React.PropTypes.oneOf(['radio', 'checkbox']),
        classPrefix: React.PropTypes.string,
        vertical: React.PropTypes.bool,
        justified: React.PropTypes.bool,
        block: React.PropTypes.bool,
        onSelect: React.PropTypes.func,
        onClick: React.PropTypes.func
    },
    getDefaultProps() {
        return {
            block: false,
            justified: false,
            vertical: false,
            classPrefix: 'btn-group'
        };
    },
    handleClick(index) {

        const { type, onSelect } = this.props;
        const activeButton = this.refs[`btn_${index}`];

        if (type === 'checkbox') {
            activeButton.toggleClass('active');
            onSelect && onSelect(activeButton);
        } else if (type === 'radio') {
            for (let key in this.refs) {
                let toggle = this.refs[key] === activeButton ? 'addClass' : 'removeClass';
                this.refs[key][toggle]('active');
            }
            onSelect && onSelect(activeButton);
        }

    },
    render() {

        const { children, className, vertical_, block_, justified_ } = this.props;
        const classes = classNames({
            'btn-group': true,
            'btn-block': block_,
            [this.prefix('vertical')]: vertical_,
            [this.prefix('justified')]: justified_
        }, ...this.getClassNames(), className);


        const items = React.Children.map(children, (item, index) => {
            return React.cloneElement(item, {
                key: index,
                ref: 'btn_' + index,
                onClick: createChainedFunction(() => this.handleClick(index), item.props.onClick)
            }, item.props.children);
        });
        const {block,justified,vertical,classPrefix,...rest} = this.props;
        return (
            <div
                {...rest}
                className={classes}
                >
                {items}
            </div>
        );
    }
});

export default ButtonGroup;
