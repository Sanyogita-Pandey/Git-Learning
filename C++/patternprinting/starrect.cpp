#include<iostream>
using namespace std;
int main(){
    int n,m;
    cout<<" Enter no. of rows : ";
    cin>>n;
    cout<<" Enter no. of columns : ";
    cin>>m;
    for( int i=0; i<n; i++){
         for(int j=1; j<=m; j++){
            // cout<<i<<" ";
             //cout<<j<<" ";
            //  for(int j=m; j>0; j--){
                cout<<j*j<<" ";
        }
        cout<<endl;
    }
    
}