import React, { Suspense } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";

// Dynamic import of the Tree and TreeNode components
const Tree = dynamic(() => import("react-organizational-chart").then(mod => mod.Tree), { ssr: false });
const TreeNode = dynamic(() => import("react-organizational-chart").then(mod => mod.TreeNode), { ssr: false });

const TreeComponent: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tree
        lineWidth={"2px"}
        lineColor={"green"}
        lineBorderRadius={"10px"}
        label={
          <div className="text-center p-2">
            <Link href="/messages" passHref>
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                Director
                <br />
                Department of Holistic Education
              </button>
            </Link>
          </div>
        }
      >
        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                Working Committee
              </button>
            </div>
          }
        />

        {/* Add more TreeNodes as needed */}
        <TreeNode
          label={
            <div className="text-center p-2">
              <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">Cells</button>
            </div>
          }
        >
          <TreeNode
            label={
              <div className="text-center p-2">
                <Link href="/cells/it" passHref>
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    IT Cell
                  </button>
                </Link>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/event" passHref>
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      Event Management Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/super100" passHref>
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        Super 100 Cell
                      </button>
                    </Link>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>

          {/* Add more TreeNodes as needed */}
          <TreeNode
            label={
              <div className="text-center p-2">
                <Link href="/cells/ipr" passHref>
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    IPR Cell
                  </button>
                </Link>
              </div>
            }
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/industry" passHref>
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      Industry Coordination Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/hei" passHref>
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        HEI Coordination Cell
                      </button>
                    </Link>
                  </div>
                }
              />
            </TreeNode>
          </TreeNode>
          {/* Add more TreeNodes as needed */}
        </TreeNode>

        <TreeNode
          label={
            <div className="text-center p-2">
              <Link href="/advisory" passHref>
                <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                  Advisory Committee
                </button>
              </Link>
            </div>
          }
        />
      </Tree>
    </Suspense>
  );
};

export default TreeComponent;
