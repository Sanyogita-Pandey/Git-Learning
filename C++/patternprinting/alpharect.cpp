#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<" Enter number of rows : ";
    cin>>n;
     cout<<" Enter number of columns : ";
    cin>>m;
    for(int i=0;i<n;i++){
        for(int j=0;j<m;j++){
            // char c = 'a'+j;
            char c = (char)97+i;
            cout<<c<<" ";
        }
        cout<<endl;
    }

}