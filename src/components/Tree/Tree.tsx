import React from 'react';
import './Tree.scss';

const TreeNode = ({ node }: any) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node">
      <div className="node-content">
        <img src={node.photo} alt={node.name} className="node-photo" />
        <h3 className="node-name">{node.name}</h3>
        <p className="node-position">{node.position}</p>
      </div>
      {hasChildren && (
        <div className="node-children">
          {node.children.map((child: { id: any }) => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = ({ data }: any) => {
  return (
    <ul>
      {data.map((node: { id: React.Key | null | undefined }) => (
        <TreeNode key={node.id} node={node} />
      ))}
    </ul>
  );
};

export default Tree;
