import React, { useEffect } from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';

const StructurePage: React.FC = () => {

  useEffect(() => {
    // This useEffect will only run on the client side
    if (typeof window !== 'undefined') {
      // Client-side specific logic can go here if needed
    }
  }, []);

  return (
    <div className="flex justify-center p-4">
      <div className="text-white font-semibold text-sm overflow-x-auto">
        <Tree
          lineWidth={"2px"}
          lineColor={"green"}
          lineBorderRadius={"10px"}
          label={
            <div className="text-center p-2">
              <Link href="/messages">
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
          >
            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/it">
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
                    <Link href="/cells/event">
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
                      <Link href="/cells/super100">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Super 100 Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/ipr">
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
                    <Link href="/cells/industry">
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
                      <Link href="/cells/hei">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          HEI Coordination Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/ecommerce">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      E Commerce Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/tms">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        TMS Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/udyam">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Udyam Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/foreign">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      Foreign Language Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/olympiad">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        Olympiad Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/lms">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          LMS Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/csr">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      CSR Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/rd">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        R and D Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/art">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Art Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/atl">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      ATL Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/publication">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        Publications and Promotions Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/environment">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Environment Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/parenting">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      Parenting Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/astrology">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        Astrology Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/premiumschool">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Premium School Cell
                        </button>
                      </Link>
                    </div>
                  }
                />
              </TreeNode>
            </TreeNode>

            <TreeNode
              label={
                <div className="text-center p-2">
                  <Link href="/cells/health">
                    <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                      Health Wisdom Cell
                    </button>
                  </Link>
                </div>
              }
            >
              <TreeNode
                label={
                  <div className="text-center p-2">
                    <Link href="/cells/sports">
                      <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                        Sports Cell
                      </button>
                    </Link>
                  </div>
                }
              >
                <TreeNode
                  label={
                    <div className="text-center p-2">
                      <Link href="/cells/spritual">
                        <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                          Spiritual Cell
                        </button>
                      </Link>
                    </div>
                  }
                >
                  <TreeNode
                    label={
                      <div className="text-center p-2">
                        <Link href="/cells/grievance">
                          <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                            Grievance Redressal Cell
                          </button>
                        </Link>
                      </div>
                    }
                  />
                </TreeNode>
              </TreeNode>
            </TreeNode>
          </TreeNode>

          <TreeNode
            label={
              <div className="text-center p-2">
                <Link href="/advisory">
                  <button className="bg-primary p-2 rounded-lg hover:bg-white hover:text-primary">
                    Advisory Committee
                  </button>
                </Link>
              </div>
            }
          />
        </Tree>
      </div>
    </div>
  );
};

export default StructurePage;
