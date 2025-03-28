#include<iostream>
using namespace std;
class Node{
    public:
    int data;
    Node*left, *right;

    Node(int value){
        left=right=NULL;
        data= value;
    }
};

Node*BinaryTree(){
    int x;
    cin>>x;
    if(x==-1){
        return NULL;

    }
    Node *temp= new Node(x);
    cout<<" Enter the left child of"<<x<<" :";
    temp->left=BinaryTree();
    cout<<" Enter the right child of"<<x<<" :";
    temp->right=BinaryTree();
    return temp;
//time complexity 0(n)
//space complexity O(n)orO(h)

}
int main(){
    cout<<" Enter the root node: ";
    Node *root;
    root=BinaryTree();
}