import React from 'react'
import styles from './grid.module.css';
import {
    Diagram,
    NodeModel,
    DiagramComponent,
    SnapSettingsModel,
    SnapConstraints,
    UndoRedo,
    GridlinesModel,
    Snapping,
    Inject,
    BpmnDiagrams
    } from "@syncfusion/ej2-react-diagrams";
    let snapSettings = {
    constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
    };

    const element = () => {
        
        <div>
            Hii
        </div>
    }


    let node= [{
        // Position of the node
        offsetX: 500,
        offsetY:100,
        // Size of the node
        width: 290,
        height: 170,
        shape: {
            type: 'HTML',
            content: '<div class="card" style="width: 18rem; padding:20px"> <div className="card-body"><h5 class="card-title">Robin Aderson</h5><h6 class="card-subtitle mb-2 text-muted cfo">CFO</h6><p class="card-text">r_anderson@gmail.com <br/> +46 767 878</p><p class="bottom"><span>FINANCE</span> <span>SWEDEN</span></p></div></div>'
        },
        // Text(label) added to the node
        }, {
            // Position of the node
            offsetX: 300,
            offsetY:400,
            // Size of the node
            width: 290,
            height: 170,
            shape: {
                type: 'HTML',
                content: '<div class="card" style="width: 18rem; padding:20px"> <div className="card-body"><h5 class="card-title">Shrinivas Sharma</h5><h6 class="card-subtitle mb-2 text-muted cfo">VP - Accounting</h6><p class="card-text">shrinivas@gmail.com <br/> +46 767 878</p><p class="bottom"><span>FINANCE</span> <span>SWEDEN</span></p></div></div>'
            },
            // Text(label) added to the node
            },
        
            {
                // Position of the node
                offsetX: 700,
                offsetY:400,
                // Size of the node
                width: 290,
                height: 170,
                shape: {
                    type: 'HTML',
                    content: '<div class="card" style="width: 18rem; padding:20px"> <div className="card-body"><h5 class="card-title">Victoria Filice</h5><h6 class="card-subtitle mb-2 text-muted cfo">VP - Taxation</h6><p class="card-text">shrinivas@gmail.com <br/> +46 767 878</p><p class="bottom"><span>FINANCE</span> <span>SWEDEN</span></p></div></div>'
                },
                // Text(label) added to the node
                }];

        let connectors= [{
            // Name of the connector
            id: "connector1",
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
                strokeWidth: 2
            },
            targetDecorator: {
                style: {
                    fill: '#6BA5D7',
                    strokeColor: '#6BA5D7'
                }
            },
            // Sets source and target points
            sourcePoint: {
                x: 500,
                y: 186
            },
            targetPoint: {
                x: 382,
                y: 315
            }
        },
        {
            // Name of the connector
            id: "connector2",
            style: {
                strokeColor: '#6BA5D7',
                fill: '#6BA5D7',
                strokeWidth: 2
            },
            targetDecorator: {
                style: {
                    fill: '#6BA5D7',
                    strokeColor: '#6BA5D7'
                }
            },
            // Sets source and target points
            sourcePoint: {
                x: 500,
                y: 186
            },
            targetPoint: {
                x: 623,
                y: 315
            }
        }];
        
const Grid = () => {
    return (
        <>
            <div className={styles.grid}>
            < DiagramComponent id = "diagram"

                width = {
                    '100%'
                }
                height = {
                    '600px'
                }
                nodes = {
                    node
                }
                connectors={
                    connectors
                }
                snapSettings={snapSettings}
                ><Inject services = {[BpmnDiagrams]}/>
                </DiagramComponent>
            </div>  
        </>
    )
}

export default Grid
