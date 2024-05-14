import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import "tailwindcss/tailwind.css";

const Structure = () => (
  <div className="flex justify-center p-4">
    <div className="text-white font-bold text-xl overflow-x-auto">
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div className="text-center p-2">
           <button className="bg-primary p-2 rounded-lg">
            Director
            <br />
            Department of Holistic Education
            </button>
          </div>
        }
      >
        <TreeNode
          label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Working Committee</button></div>}
        ></TreeNode>
        <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cells</button></div>}>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
          <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 1</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 9</button></div>}>
            <TreeNode label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Cell 17</button></div>} />
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode
          label={<div className="text-center p-2"><button className="bg-primary p-2 rounded-lg">Advisory Committee</button></div>}
        ></TreeNode>
      </Tree>
    </div>
  </div>
);

export default Structure;
