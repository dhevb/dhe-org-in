import React, { useEffect, useState, lazy, Suspense } from "react";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { Tree, TreeNode } from "react-organizational-chart";

const StructurePage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    isClient && (
      <div className="flex justify-center p-4">
        <div className="text-white font-semibold text-sm overflow-x-auto">
          <TreeComponent />
        </div>
      </div>
    )
  );
};

const TreeComponent: React.FC = () => {
  const Tree = lazy(() =>
    import("react-organizational-chart").then(module => ({
      default: module.Tree,
      TreeNode: module.TreeNode
    }))
  );

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

export default StructurePage;
