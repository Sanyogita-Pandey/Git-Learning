#include<iostream>
#include<queue>
#include<vector>
using namespace std;
class Node{
    public:
    int data;
    Node* left, *right;

    Node(int value){
        data=value;
        left=right=nullptr;
    }
};

   int main(){
    int x;
    cout<<" Enter the root element:";
    cin>>x;
    int first,second;
    queue<Node*>q;
    Node*root=new Node(x);
    q.push(root);


    //Build the binary tree
    while(!q.empty()){
        Node *temp=q.front();
        q.pop();
         cout<<" Enter the left child of "<<temp->data<<" : ";
        cin>>first;
        if(first!=-1){
            temp->left=new Node(first);
            q.push(temp->left);
        }
        cout<<" Enter the Right child of "<<temp->data<<" : ";
        cin>>second;
        if(second!=-1){
            temp->right=new Node(second);
            q.push(temp->right);
        }
    }


   } 


