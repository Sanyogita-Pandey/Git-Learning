#include<iostream>
using namespace std;
int main(){
    int L, B, H;
    cin>>L>>B>>H;
    int ***ptr = new int **[L];
    for(int i=0; i<L; i++){
        ptr[i] = new int *[B];
        for(int j=0;j<B; j++){
            ptr[i][j] = new int[H];

        }
    }
    for(int i=0; i<L; i++)
    for(int j=0; j<B; j++)
    for(int K=0; K<L; K++)
    ptr[i][j][K] = i+j+K;

    for(int i=0; i<L; i++)
    for(int j=0; j<B; j++)
    for(int K=0; K<L; K++)
    cout<<ptr[i][j][K]<<" "<<endl;
    

}