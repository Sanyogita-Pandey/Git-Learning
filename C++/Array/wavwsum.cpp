#include<iostream>
using namespace std;
void wave(int arr[3][4], int row, int col){
    for(int j=0;j<col;j++){
        if(j%2==0){
            for(int i=0;i<row;i++)
            cout<<arr[i][j]<<" ";
        }
        else{
        for(int i=row-1;i>=0;i--){
            cout<<arr[i][j]<<" ";
        }
    }
    }
}
int main(){
    int arr[3][4];
    cout<<" Enter the elements : ";
    for(int i=0;i<3;i++){
        for(int j=0;j<4;j++){
            cin>>arr[i][j];
        }
    }
    wave(arr, 3, 4);

}