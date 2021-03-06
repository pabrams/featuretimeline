import "./WorkItemRenderer.scss";

import * as React from 'react';
import { getRowColumnStyle } from '../../../redux/Helpers/gridhelper';
import { IDimension } from "../../../redux/Contracts/types";

export interface IWorkItemShadowProps {
    dimension: IDimension;
    twoRows: boolean;
}

export class WorkItemShadow extends React.Component<IWorkItemShadowProps, {}> {
    public render() {
        const {
            dimension,
            twoRows
        } = this.props;
        const style = getRowColumnStyle(dimension);
        if (twoRows) {
            style['height'] = '52px';
        }
        return (
            <div className="work-item-shadow" style={style}>
                <div className="title">&nbsp;</div>
            </div>
        );
    }
}