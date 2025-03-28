#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<" enter number of rows : ";
    cin>>n;
    cout<<" enter number of columns : ";
    cin>>m;
    int x = 1;
    for(int i=0; i<n; i++){
        for(int j=0; j<m; j++){
        //cout<<x<<" ";
            //x++;
            cout<<i*5+j<<" ";
        }
        cout<<endl;
    }
}